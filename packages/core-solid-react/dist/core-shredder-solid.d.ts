import React from 'react';

export interface CoreShredderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShredderSolid(props: CoreShredderSolidProps): React.ReactElement;
export default CoreShredderSolid;
