import React from 'react';

export interface CoreMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMusicSolid(props: CoreMusicSolidProps): React.ReactElement;
export default CoreMusicSolid;
