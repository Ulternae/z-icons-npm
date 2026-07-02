import React from 'react';

export interface CoreFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFile(props: CoreFileProps): React.ReactElement;
export default CoreFile;
