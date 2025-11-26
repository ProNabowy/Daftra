import { ErrorMessageProps } from "@/types";

function ErrorMessage({
	message = "Something went wrong",
	onRetry,
}: ErrorMessageProps) {
	const handleRetry = () => {
		onRetry?.();
	};

	return (
		<div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4">
			<p className="text-sm sm:text-base text-red-600 mb-4 sm:mb-6 text-center max-w-md">
				{message}
			</p>
			{onRetry && (
				<button
					onClick={handleRetry}
					className="min-h-[44px] px-6 py-2.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium text-sm sm:text-base"
				>
					Retry
				</button>
			)}
		</div>
	);
}

export default ErrorMessage;
