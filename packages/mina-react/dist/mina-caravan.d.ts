import React from 'react';

export interface MinaCaravanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCaravan(props: MinaCaravanProps): React.ReactElement;
export default MinaCaravan;
