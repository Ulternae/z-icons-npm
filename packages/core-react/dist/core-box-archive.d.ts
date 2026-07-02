import React from 'react';

export interface CoreBoxArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoxArchive(props: CoreBoxArchiveProps): React.ReactElement;
export default CoreBoxArchive;
