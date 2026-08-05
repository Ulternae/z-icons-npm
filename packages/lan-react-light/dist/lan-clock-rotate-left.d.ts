import React from 'react';

export interface LanClockRotateLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockRotateLeft(props: LanClockRotateLeftProps): React.ReactElement;
export default LanClockRotateLeft;
