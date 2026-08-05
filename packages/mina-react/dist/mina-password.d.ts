import React from 'react';

export interface MinaPasswordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPassword(props: MinaPasswordProps): React.ReactElement;
export default MinaPassword;
