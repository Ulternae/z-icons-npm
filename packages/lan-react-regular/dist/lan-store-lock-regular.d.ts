import React from 'react';

export interface LanStoreLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreLockRegular(props: LanStoreLockRegularProps): React.ReactElement;
export default LanStoreLockRegular;
