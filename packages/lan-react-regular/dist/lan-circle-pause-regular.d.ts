import React from 'react';

export interface LanCirclePauseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePauseRegular(props: LanCirclePauseRegularProps): React.ReactElement;
export default LanCirclePauseRegular;
