import React from 'react';

export interface LanLacrosseStickBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLacrosseStickBallSolid(props: LanLacrosseStickBallSolidProps): React.ReactElement;
export default LanLacrosseStickBallSolid;
