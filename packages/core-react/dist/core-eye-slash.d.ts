import React from 'react';

export interface CoreEyeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEyeSlash(props: CoreEyeSlashProps): React.ReactElement;
export default CoreEyeSlash;
