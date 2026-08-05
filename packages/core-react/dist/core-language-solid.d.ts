import React from 'react';

export interface CoreLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLanguageSolid(props: CoreLanguageSolidProps): React.ReactElement;
export default CoreLanguageSolid;
