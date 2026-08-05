import React from 'react';

export interface NeoBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBookOpen(props: NeoBookOpenProps): React.ReactElement;
export default NeoBookOpen;
