import { useState } from "react";

interface ImageWithFallbackProps {
	src: string;
	alt: string;
	className?: string;
	fallbackClassName?: string;
}

const ErrorHandler = ({
	alt,
	className,
	fallbackClassName,
}: Pick<ImageWithFallbackProps, "alt" | "className" | "fallbackClassName">) => {
	return (
		<div
			className={`flex items-center justify-center ${
				fallbackClassName || className
			}`}
			role="img"
			aria-label={alt}
		>
			<svg
				className="w-1/2 h-1/2 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		</div>
	);
};

function ImageWithFallback({
	src,
	alt,
	className = "",
	fallbackClassName = "",
}: ImageWithFallbackProps) {
	const [hasError, setHasError] = useState(false);

	const [isLoading, setIsLoading] = useState(true);

	const handleError = () => {
		setHasError(true);

		setIsLoading(false);
	};

	const handleLoad = () => setIsLoading(false);

	if (hasError) {
		return (
			<ErrorHandler
				alt={alt}
				className={className}
				fallbackClassName={fallbackClassName}
			/>
		);
	}

	return (
		<div className="relative w-full h-full">
			{isLoading && (
				<div
					className={`absolute inset-0 bg-gray-200 animate-pulse ${
						fallbackClassName || className
					}`}
					aria-label={`Loading ${alt}`}
				/>
			)}
			<img
				src={src}
				alt={alt}
				className={`${className} ${
					isLoading ? "opacity-0 absolute" : "opacity-100"
				} transition-opacity duration-200`}
				onError={handleError}
				onLoad={handleLoad}
			/>
		</div>
	);
}

export default ImageWithFallback;
