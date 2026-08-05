import React from 'react';

export interface LanPlayFlipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayFlip(props: LanPlayFlipProps): React.ReactElement;
export default LanPlayFlip;
