import React from 'react';

export interface MinaUnlinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUnlink(props: MinaUnlinkProps): React.ReactElement;
export default MinaUnlink;
