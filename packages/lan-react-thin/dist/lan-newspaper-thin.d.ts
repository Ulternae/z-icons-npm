import React from 'react';

export interface LanNewspaperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNewspaperThin(props: LanNewspaperThinProps): React.ReactElement;
export default LanNewspaperThin;
