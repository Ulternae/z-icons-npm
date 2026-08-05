import React from 'react';

export interface LanSquarePesetaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePesetaRegular(props: LanSquarePesetaRegularProps): React.ReactElement;
export default LanSquarePesetaRegular;
