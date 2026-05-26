import React from 'react';

export interface LanFileHtmlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHtml: React.FC<LanFileHtmlProps>;
export default LanFileHtml;
