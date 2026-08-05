import React from 'react';

export interface CoreShieldCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShieldCheckSolid(props: CoreShieldCheckSolidProps): React.ReactElement;
export default CoreShieldCheckSolid;
