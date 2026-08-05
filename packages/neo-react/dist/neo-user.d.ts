import React from 'react';

export interface NeoUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUser(props: NeoUserProps): React.ReactElement;
export default NeoUser;
