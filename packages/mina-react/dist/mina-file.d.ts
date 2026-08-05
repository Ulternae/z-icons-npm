import React from 'react';

export interface MinaFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFile(props: MinaFileProps): React.ReactElement;
export default MinaFile;
