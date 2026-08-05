import React from 'react';

export interface CoreListMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreListMusicSolid(props: CoreListMusicSolidProps): React.ReactElement;
export default CoreListMusicSolid;
