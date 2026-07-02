import React from 'react';

export interface CoreIdCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreIdCardSolid(props: CoreIdCardSolidProps): React.ReactElement;
export default CoreIdCardSolid;
