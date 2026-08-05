import React from 'react';

export interface LanSickleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSickleRegular(props: LanSickleRegularProps): React.ReactElement;
export default LanSickleRegular;
