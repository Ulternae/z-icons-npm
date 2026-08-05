import React from 'react';

export interface LanCircleLariProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLari(props: LanCircleLariProps): React.ReactElement;
export default LanCircleLari;
