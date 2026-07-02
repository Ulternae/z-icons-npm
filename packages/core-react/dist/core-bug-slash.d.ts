import React from 'react';

export interface CoreBugSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBugSlash(props: CoreBugSlashProps): React.ReactElement;
export default CoreBugSlash;
