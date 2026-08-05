import React from 'react';

export interface LanSwatchbookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwatchbook(props: LanSwatchbookProps): React.ReactElement;
export default LanSwatchbook;
