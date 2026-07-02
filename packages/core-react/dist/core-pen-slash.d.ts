import React from 'react';

export interface CorePenSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenSlash(props: CorePenSlashProps): React.ReactElement;
export default CorePenSlash;
