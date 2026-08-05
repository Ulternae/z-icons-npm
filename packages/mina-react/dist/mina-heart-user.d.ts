import React from 'react';

export interface MinaHeartUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartUser(props: MinaHeartUserProps): React.ReactElement;
export default MinaHeartUser;
