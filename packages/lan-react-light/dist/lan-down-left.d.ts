import React from 'react';

export interface LanDownLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownLeft(props: LanDownLeftProps): React.ReactElement;
export default LanDownLeft;
