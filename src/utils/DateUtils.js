/**
 * Date Formatter - Utility function for date formatting.
 * Provides a consistent, human-readable "Updated …" label.
 *
 * @principle SRP - Single Responsibility Principle: This module only formats dates and does not handle any unrelated logic.
 */
export const DateUtils = {
  /**
   * Formats a date string into "Updated Month Day, Year".
   * Returns empty string if input is invalid.
   * @param {string} dateStr - ISO date string.
   * @returns {string} Formatted date string.
   */
  format(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) return "";
    return `Updated ${date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  },
};
