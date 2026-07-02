import React from 'react';

export interface CoreShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShieldSolid(props: CoreShieldSolidProps): React.ReactElement;
export default CoreShieldSolid;
