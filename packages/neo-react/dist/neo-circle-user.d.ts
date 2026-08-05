import React from 'react';

export interface NeoCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleUser(props: NeoCircleUserProps): React.ReactElement;
export default NeoCircleUser;
