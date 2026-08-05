import React from 'react';

export interface NeoVideoSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVideoSlash(props: NeoVideoSlashProps): React.ReactElement;
export default NeoVideoSlash;
