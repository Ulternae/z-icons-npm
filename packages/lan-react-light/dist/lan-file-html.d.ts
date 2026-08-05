import React from 'react';

export interface LanFileHtmlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHtml(props: LanFileHtmlProps): React.ReactElement;
export default LanFileHtml;
