import React from 'react';

export interface NeoFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFile(props: NeoFileProps): React.ReactElement;
export default NeoFile;
