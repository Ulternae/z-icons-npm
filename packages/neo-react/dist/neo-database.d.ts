import React from 'react';

export interface NeoDatabaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDatabase(props: NeoDatabaseProps): React.ReactElement;
export default NeoDatabase;
