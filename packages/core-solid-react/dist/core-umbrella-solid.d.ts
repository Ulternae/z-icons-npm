import React from 'react';

export interface CoreUmbrellaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUmbrellaSolid(props: CoreUmbrellaSolidProps): React.ReactElement;
export default CoreUmbrellaSolid;
