import React from 'react';

export interface BruMetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMeta(props: BruMetaProps): React.ReactElement;
export default BruMeta;
