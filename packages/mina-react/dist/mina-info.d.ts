import React from 'react';

export interface MinaInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfo(props: MinaInfoProps): React.ReactElement;
export default MinaInfo;
