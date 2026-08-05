import React from 'react';

export interface MinaBookUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookUser(props: MinaBookUserProps): React.ReactElement;
export default MinaBookUser;
