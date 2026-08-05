import React from 'react';

export interface LanSwatchbookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwatchbookThin(props: LanSwatchbookThinProps): React.ReactElement;
export default LanSwatchbookThin;
