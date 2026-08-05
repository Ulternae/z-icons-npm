import React from 'react';

export interface LanCirclePesetaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePesetaRegular(props: LanCirclePesetaRegularProps): React.ReactElement;
export default LanCirclePesetaRegular;
