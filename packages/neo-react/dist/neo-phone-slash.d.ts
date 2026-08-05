import React from 'react';

export interface NeoPhoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPhoneSlash(props: NeoPhoneSlashProps): React.ReactElement;
export default NeoPhoneSlash;
