import React from 'react';

export interface NeoTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTag(props: NeoTagProps): React.ReactElement;
export default NeoTag;
