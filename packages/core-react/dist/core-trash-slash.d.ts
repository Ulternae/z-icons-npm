import React from 'react';

export interface CoreTrashSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrashSlash(props: CoreTrashSlashProps): React.ReactElement;
export default CoreTrashSlash;
