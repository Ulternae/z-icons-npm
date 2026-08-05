import React from 'react';

export interface MinaSearchUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchUser(props: MinaSearchUserProps): React.ReactElement;
export default MinaSearchUser;
