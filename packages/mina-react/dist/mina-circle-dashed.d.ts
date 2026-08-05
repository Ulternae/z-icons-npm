import React from 'react';

export interface MinaCircleDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleDashed(props: MinaCircleDashedProps): React.ReactElement;
export default MinaCircleDashed;
