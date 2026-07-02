import React from 'react';

export interface CoreFilePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilePlus(props: CoreFilePlusProps): React.ReactElement;
export default CoreFilePlus;
