import React from 'react';

export interface MinaTelephoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTelephoneSlash(props: MinaTelephoneSlashProps): React.ReactElement;
export default MinaTelephoneSlash;
