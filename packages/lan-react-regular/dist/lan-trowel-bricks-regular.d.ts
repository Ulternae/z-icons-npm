import React from 'react';

export interface LanTrowelBricksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrowelBricksRegular(props: LanTrowelBricksRegularProps): React.ReactElement;
export default LanTrowelBricksRegular;
