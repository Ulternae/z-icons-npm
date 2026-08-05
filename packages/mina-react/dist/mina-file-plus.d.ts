import React from 'react';

export interface MinaFilePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFilePlus(props: MinaFilePlusProps): React.ReactElement;
export default MinaFilePlus;
