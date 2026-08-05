import React from 'react';

export interface LanClosedCaptioningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClosedCaptioning(props: LanClosedCaptioningProps): React.ReactElement;
export default LanClosedCaptioning;
