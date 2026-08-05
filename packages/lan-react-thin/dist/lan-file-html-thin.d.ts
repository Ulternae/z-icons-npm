import React from 'react';

export interface LanFileHtmlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHtmlThin(props: LanFileHtmlThinProps): React.ReactElement;
export default LanFileHtmlThin;
